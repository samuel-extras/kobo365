import React from "react";

const Card = ({display}) => {
  return (
    <div className="ctm-border-radius shadow-sm card" style={{ display: display? "none": "flex"}}>
      <div className="card-body">
        <div className="row people-grid-row">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="card widget-profile">
              <div className="card-body">
                <div className="pro-widget-content text-center">
                  <div className="profile-info-widget">
                    
                    <div className="profile-det-info">
                      <h4>
                        <div className="text-primary">
                          Maria Cotton
                        </div>
                      </h4>
                      <div>
                        <p className="mb-0">
                          <b>PHP Team Lead</b>
                        </p>
                        <p className="mb-0 ctm-text-sm">mariacotton@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;