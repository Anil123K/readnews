import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl ? "images.jpg" : imageUrl}
            className="card-img-top"
            alt="..."
            height="161px"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              <div style={{
                display:'flex',
                justifyContent:'flex-end',
                position:'absolute',
                top:'0',
                right:'0'
              }}>
              <span
                className=" badge rounded-pill bg-danger"
                >
              
                {source}
              </span>
              </div>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="norefferer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
