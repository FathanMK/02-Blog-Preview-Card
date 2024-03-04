export default function App() {
  return (
    <div className="screen">
      <div className="card">
        <img className="image" src="/images/illustration-article.svg" />
        <span className="tag">Learning</span>
        <span style={{ marginTop: ".55rem" }}>Published 21 Dec 2023</span>
        <h1 className="title">HTML & CSS Foundations</h1>
        <p className="desc">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="author">
          <img className="avatar" src="/images/image-avatar.webp" />
          <p className="name">Grey Hopper</p>
        </div>
      </div>
    </div>
  );
}
