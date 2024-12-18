import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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
            const response = await axios.post('/run-scraper', { sport, category });
            console.log('Scraper response:', response);

            if (response.status !== 200) {
                throw new Error(`Failed to run scraper: ${response.statusText}`);
            }

            const data = response.data.data;
            if (!data) {
                throw new Error('No data returned from scraper');
            }
            console.log('Scraper triggered successfully, data:', data);

            setCsvData(data);
            setLoading(false);
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
        console.log('useEffect triggered');
        runScraper();
    }, [sport, category]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="w-full flex justify-center items-center">
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 p-4" style={{ width: '100%', maxWidth: '100vw', overflowX: 'auto' }}>
                    {csvData && csvData.slice(1).filter(row => row[2] && row[3]).map((row: any[], rowIndex: number) => (
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
