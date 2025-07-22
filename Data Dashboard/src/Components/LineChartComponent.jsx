import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = (props) => {
    return(
        <>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={props.data}
                    margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /> {/* Lighter grid lines */}
                    <XAxis dataKey="year" stroke="#333" /> {/* Darker axis text */}
                    <YAxis stroke="#333" label={{ value: 'Consumption (kg/capita)', angle: -90, position: 'insideLeft', fill: '#333' }} />
                    <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: '1px solid #ccc', padding: '10px' }}
                    labelStyle={{ color: '#555', fontWeight: 'bold' }}
                    itemStyle={{ color: '#333' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Line type="monotone" dataKey="meatConsumption" stroke="#8884d8" activeDot={{ r: 8 }} name="Meat Consumption" />
                    <Line type="monotone" dataKey="grainConsumption" stroke="#82ca9d" activeDot={{ r: 8 }} name="Grain Consumption" />
                    <Line type="monotone" dataKey="vegetableConsumption" stroke="#ffc658" activeDot={{ r: 8 }} name="Vegetable Consumption" />
                </LineChart>
    </ResponsiveContainer>
        </>
    )
}

export default LineChartComponent;