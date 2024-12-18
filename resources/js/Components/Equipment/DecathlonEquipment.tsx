import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Papa, { ParseResult, ParseError } from 'papaparse'; // Import ParseResult and ParseError from papaparse

interface DecathlonEquipmentProps {
    sport: string;
    category: string;
}

const DecathlonEquipment: React.FC<DecathlonEquipmentProps> = ({ sport, category }) => {
    const [loading, setLoading] = useState(false);
    const [csvData, setCsvData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const runScraper = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('Triggering scraper');
            // Call the Laravel API to trigger the Python script
            await axios.post('/run-scraper', { sport, category });
            console.log('Scraper triggered successfully');

            // Now, fetch the CSV file
            const response = await axios.get('/storage/scraped-data.csv', {
                responseType: 'blob',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });
            console.log('CSV file fetched successfully');

            // Read the CSV file as text
            const reader = new FileReader();
            reader.onload = () => {
                console.log('Reading CSV file');
                Papa.parse<string>(reader.result as string, {
                    complete: (result: ParseResult<string>) => {
                        console.log('CSV file parsed successfully', result.data);
                        setCsvData(result.data as any[]);
                        setLoading(false);
                    },
                    error: (err: ParseError) => {
                        console.error('Failed to parse CSV data:', err.message);
                        setError(`Failed to parse CSV data: ${err.message}`);
                        setLoading(false);
                    }
                });
            };
            reader.onerror = () => {
                console.error('Failed to read CSV file');
                setError('Failed to read CSV file');
                setLoading(false);
            };
            reader.readAsText(response.data);
        } catch (err) {
            if (err instanceof Error) {
                console.error('Failed to run scraper:', err.message);
                setError(`Failed to run scraper: ${err.message}`);
            } else {
                console.error('Failed to run scraper:', err);
                setError('Failed to run scraper');
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        runScraper();
    }, [sport, category]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="w-full flex justify-center items-center">
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4" style={{ width: '100%', maxWidth: '100vw', overflowX: 'auto' }}>
                    {csvData.slice(1).filter(row => row[2] && row[3]).map((row: any[], rowIndex: number) => (
                        <div key={rowIndex} className="border p-4 rounded shadow min-w-[150px] max-w-[150px]">
                            <img src={row[2]} alt={row[0]} className="w-full h-32 object-cover mb-4" />
                            <h4 className="text-lg font-bold">{row[0]}</h4>
                            <p className="text-gray-700">{row[1]}</p>
                            <a href={row[3]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                View Product
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DecathlonEquipment;
