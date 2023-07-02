import React from "react";
import { BsTwitter, BsSlack } from "react-icons/bs";
import left_testimonial_content from "../json_files/left_testimonials.json";
import right_testimonial_content from "../json_files/right_testimonials.json";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="left-infinite">
        {left_testimonial_content.map((left_testimonial_item) => {
          return (
            <div key={left_testimonial_item.id}>
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

      <div className="right-infinite">
        {right_testimonial_content.map((right_testimonial_item) => {
          return (
            <div key={right_testimonial_item.name}>
              <div className="testifier">
                <p>{right_testimonial_item.testifier}</p>
                {right_testimonial_item.platform == "slack" ? (
                  <BsSlack />
                ) : (
                  <BsTwitter />
                )}
              </div>
              <p className="testimony">{right_testimonial_item.testimony}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
