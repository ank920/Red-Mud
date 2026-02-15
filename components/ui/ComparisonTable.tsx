"use client";

interface ComparisonRow {
    feature: string;
    values: string[];
}

interface ComparisonTableProps {
    headers: string[];
    rows: ComparisonRow[];
    ariaLabel: string;
}

export function ComparisonTable({ headers, rows, ariaLabel }: ComparisonTableProps) {
    return (
        <>
            {/* Desktop: Table */}
            <div className="comparison-table-wrap" role="region" aria-label={ariaLabel} tabIndex={0}>
                <table className="comparison-table">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} scope="col">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <th scope="row">{row.feature}</th>
                                {row.values.map((value, valueIndex) => (
                                    <td key={valueIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile: Cards */}
            <div className="comparison-cards">
                {headers.slice(1).map((header, headerIndex) => (
                    <div key={headerIndex} className="comparison-card">
                        <h3 className="comparison-card-title">{header}</h3>
                        <dl className="comparison-card-list">
                            {rows.map((row, rowIndex) => (
                                <div key={rowIndex} className="comparison-card-item">
                                    <dt>{row.feature}</dt>
                                    <dd>{row.values[headerIndex]}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </>
    );
}
