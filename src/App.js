import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Tisan Bako Workout Streaming Services</h2>
      <video width="700px" height="400" controls>
        <source src="https://disq2kklgrjqy.cloudfront.net/tisan-workout.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
