import Image from "next/image";
import { Dots } from "@/components/ui/window-dots";

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
            <h3>University of Moratuwa</h3>
            <p>Faculty of Information Technology</p>
          </div>
        </div>
        <div className="academic-row">
          <small>DEGREE</small>
          <h3>B.Sc. (Hons) in Information Technology</h3>
          <p>Third-year undergraduate</p>
        </div>
        <div className="academic-row">
          <small>LEADERSHIP & COMMUNITY</small>
          <h3>Faculty Career Fair 2026</h3>
          <p>Organizing Committee & Technical Volunteer</p>
        </div>
        <div className="academic-bottom">
          <span>Moratuwa, Sri Lanka</span>
          <span className="accent">Full-Stack Engineering</span>
        </div>
      </div>
    </div>
  );
}
