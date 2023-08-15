export const Statistics  = ({ state: { good, neutral, bad}, total, percentage }) => {
  return (
    <>
      <h2>Statistic</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive feedback: {percentage}%</p>
    </>
  );
};
