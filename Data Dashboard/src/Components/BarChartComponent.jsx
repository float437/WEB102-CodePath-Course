import { BarChart, Bar, Rectangle, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = (props) => {
    return(
        <>
            {console.log("props.data",props.data)}
            {console.log("props.data.id",props.data.id)}
            {console.log("props.data.data",props.data.data)}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    width={500}
                    height={300}
                    data={props.data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"id"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"protein"} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey={"calories"} fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                  </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default BarChartComponent;