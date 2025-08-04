const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
      <img 
        src={src || "https://via.placeholder.com/400x200?text=No+Image"} 
        className="card-img-top" 
        alt="news" 
        style={{ objectFit: "cover", height: "200px" }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 60) : "No Title"}</h5>
        <p className="card-text text-muted" style={{ flex: 1 }}>
          {description ? description.slice(0, 100) + "..." : "No description available."}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
