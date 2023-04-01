function Home() {
  return (
  <div className="home-screen">
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <h1>Welcome to my App</h1>
    <p>This is the home screen of my app.</p>
    <button>Get Started</button>
  </div>
  );
}

export default Home;