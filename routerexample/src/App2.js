import {
    BrowserRouter as Router,
    useRoutes,
    Link,
    Outlet,
    useParams } from 'react-router-dom';

    const BlogPosts = {
        'React Basics': {
          title: 'React - Fundamentals',
          description: 'Lorem ipsum dolor sit amet, consectetur adip.'
        },
        'React Router': {
          title: 'React Router Basics',
          description: 'Hello React Router v6'
        }
      };
      
      function Home() {
        return (
          <div style={{ padding: 20 }}>
            <h2>Home View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
          </div>
        );
      }
      
      function About() {
        return (
          <div style={{ padding: 20 }}>
            <h2>About View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
          </div>
        );
      }
      
      function Posts() {
        return (
          <div style={{ padding: 20 }}>
            <h2>Blog</h2>
            <Outlet />
          </div>
        );
      }
      
      function PostLists() {
        return (
          <ul>
            {Object.entries(BlogPosts).map(([ss, { title }]) => (
              <li key={ss}>
                <Link to={`/posts/${ss}`}>
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        );
      }
      
      function Post() {
        const { ss } = useParams();
        const post = BlogPosts[ss];
        if(!post) {
          return <span>The blog post you've requested doesn't exist.</span>;
        }
        const { title, description } = post;
        return (
          <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      }
      
      function NoMatch() {
        return (
          <div style={{ padding: 20 }}>
            <h2>404: Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
          </div>
        );
      }

    function Routes() {
        const element = useRoutes([
          { path: "/", element: <Home/> },
          { path: "/posts",
            element: <Posts/>,
            children: [
              { index: true, element: <PostLists/> },
              { path: ":ss", element: <Post/> }
            ],
          },
          { path: "/about", element: <About/> },
          { path: "*", element: <NoMatch/>}
        ]);
        return element;
      }
      
      function App() {
        return (
          <Router>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                Home
                </Link>
                <Link to="/posts" style={{ padding: 5 }}>
                Posts
                </Link>
                <Link to="/about" style={{ padding: 5 }}>
                About
                </Link>
            </nav>
            <Routes/>
          </Router>
        );
      }

      export default App;