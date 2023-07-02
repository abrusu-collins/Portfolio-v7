import React from "react";
import { BsTwitter, BsSlack } from "react-icons/bs";
import left_testimonial_content from "../json_files/left_testimonials.json";
function Testimonials() {
  return (
    <div className="testimonials">
      <p className="title">Don't just take my word for it</p>

      <div className="left-infinite">
        {left_testimonial_content.map((left_testimonial_item) => {
          return (
            <div key={left_testimonial_item.id} >
              <div className="testifier">
                <p>{left_testimonial_item.testifier}</p>
                {left_testimonial_item.platform == "slack" ? (
                  <BsSlack />
                ) : (
                  <BsTwitter />
                )}
              </div>
              <p className="testimony">{left_testimonial_item.testimony}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
