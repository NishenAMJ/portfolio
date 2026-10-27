import Image from "next/image";
import { Dots } from "@/components/ui/window-dots";
import { academics, leadership } from "@/data/academics";

export function AcademicCard() {
  return (
    <div className="academic panel">
      <div className="panel-bar">
        <Dots />
        <span>Education & community</span>
      </div>
      <div className="panel-body">
        <div className="academic-heading">
          <span className="icon-tile">
            <Image
              src="/design/university.svg"
              alt=""
              width={16.5}
              height={13.5}
            />
          </span>
          <div>
            <small>INSTITUTION</small>
            <h3>{academics.institution}</h3>
            <p>{academics.faculty}</p>
          </div>
        </div>
        <div className="academic-row">
          <small>DEGREE</small>
          <h3>{academics.degree}</h3>
          <p>{academics.standing}</p>
        </div>
        <div className="academic-row">
          <small>LEADERSHIP & COMMUNITY</small>
          <h3>{leadership.event}</h3>
          <p>{leadership.role}</p>
        </div>
        <div className="academic-bottom">
          <span>{academics.location}</span>
          <span className="accent">Full-Stack Engineering</span>
        </div>
      </div>
    </div>
  );
}
