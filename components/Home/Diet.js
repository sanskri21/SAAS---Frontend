import React from "react";
import BulkImage from "/Users/divasmishra/Desktop/fitness-tracker/src/Assests/bulk.jpeg";
import CutImage from "/Users/divasmishra/Desktop/fitness-tracker/src/Assests/cut.jpg";

export default function Diet() {
  return (
    <>
      <div className="diet-plans-container">
        <h2 className="section-heading" id="DietPlanner">Explore Our Diet Plans</h2>
        <div className="diet-cards">
          <div className="diet-card">
            <img src={BulkImage} alt="Free Bulk Diet.. " />
            <h3>Free Bulk Diet</h3>
            <p>
              Get ready to bulk up with our free diet plan! Our expert-designed
              program will guide you through a calorie-controlled diet that
              fuels muscle growth and supports your fitness goals. Learn how to
              eat to gain lean muscle mass, incorporate cheat meals, and make
              adjustments for optimal results. Start your bulking journey today
              and see the transformation for yourself!
            </p>
            <a href="path/to/bulk-diet-pdf.pdf" className="btn download-pdf">
              Download PDF
            </a>
          </div>
          <div className="diet-card">
            <img src={CutImage} alt="Free Cut Diet.. " />
            <h3>Free Cut Diet</h3>
            <p>
              Get ready to cut and reveal the lean muscle you've been building!
              Our free cut diet plan is designed to help you lose fat while
              preserving your hard-earned muscle mass. Learn how to calculate
              your calorie needs, focus on whole foods, and make smart choices
              to support your weight loss goals. With our expert guidance,
              you'll be able to achieve a leaner, more defined physique in no
              time. Start your cutting journey today and see the transformation
              for yourself!
            </p>
            <a href="path/to/cut-diet-pdf.pdf" className="btn download-pdf">
              Download PDF
            </a>
          </div>
          <div className="diet-card">
            <img src={BulkImage} alt="Persoalized Diet.. " />
            <h3>Personalized Bulk Diet</h3>
            <p>
              Get ready to build the muscle you've always wanted! Our
              personalized bulk diet plans are designed to help you gain lean
              muscle mass quickly and safely. Our expert nutritionists will work
              with you to create a customized meal plan that provides the
              perfect balance of protein, carbohydrates, and healthy fats to
              support your muscle-building goals. With our guidance, you'll be
              able to fuel your body for optimal growth and see significant
              gains in no time. Start your bulking journey today and unleash
              your full potential.
            </p>
            <a href="path/to/other-diet-pdf.pdf" className="btn download-pdf">
              Download PDF
            </a>
          </div>
          <div className="diet-card">
            <img src={CutImage} alt="Another Diet.." />
            <h3>Personalized Cut Diet</h3>
            <p>
              Reveal the lean, toned physique you've been working towards! Our
              personalized cut diet plans are designed to help you lose fat and
              maintain muscle mass, so you can achieve a ripped and defined
              body. Our expert nutritionists will work with you to create a
              customized meal plan that's tailored to your specific needs and
              goals, ensuring you're fueling your body for optimal fat loss
              while preserving your hard-earned muscle. Get ready to see the
              results of your hard work and confidence soar! Start your cutting
              journey today and uncover the best version of yourself.
            </p>
            <a href="path/to/another-diet-pdf.pdf" className="btn download-pdf">
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
