import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse'; // You can use PapaParse to read CSV files

const ScraperComponent: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [csvData, setCsvData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const runScraper = async () => {
        setLoading(true);
        setError(null);

        try {
            // Call the Laravel API to trigger the Python script
            await axios.post('/run-scraper');

            // Now, fetch the CSV file
            const response = await axios.get('/storage/app/public/scraped-data.csv');

            // Parse the CSV data
            Papa.parse(response.data, {
                complete: (result) => {
                    setCsvData(result.data);
                    setLoading(false);
                },
                error: (err) => {
                    setError('Error parsing CSV: ' + err.message);
                    setLoading(false);
                },
            });
        } catch (err) {
            setError('Error running scraper: ' + err.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={runScraper} disabled={loading}>
                {loading ? 'Running Scraper...' : 'Run Scraper'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <h3>CSV Data:</h3>
                <table>
                    <thead>
                        <tr>
                            {csvData[0] && csvData[0].map((header: string, index: number) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.slice(1).map((row: any[], rowIndex: number) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScraperComponent;
