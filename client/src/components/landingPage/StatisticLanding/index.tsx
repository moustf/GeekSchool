import "./index.css";

const StatisticLanding = () => (
  <div className="statistic" id="statistics">
    <div className="left">
      <div className="content">
        <div className="line">
          <div className="number" style={{ display: "flex", gap: "0.5rem" }}>
            <h1
              className="text-number"
              style={{ color: "white", fontSize: "40px" }}
            >
              544+
            </h1>
            <h1 style={{ color: "white" }}>طالب</h1>
          </div>
          <div>
            <p>
              الكثير من الطلاب انضموا إلينا، لمساعدتهم في الحصول على عملية
              تعليمية أفضل.{" "}
            </p>
          </div>
        </div>

        <div className="line">
          <div className="number" style={{ display: "flex", gap: "0.5rem" }}>
            <h1
              className="text-number"
              style={{ color: "white", fontSize: "40px" }}
            >
              1000+
            </h1>
            <h1 style={{ color: "white" }}>فصل</h1>
          </div>
          <div>
            <p>
              {" "}
              كنا قادرين على المساهمة في تحويل الكثير من الفصول العادية إلى
              افتراضية لفرص تعليم أفضل{" "}
            </p>
          </div>
        </div>

        <div className="line">
          <div className="number" style={{ display: "flex", gap: "0.5rem" }}>
            <h1
              className="text-number"
              style={{ color: "white", fontSize: "40px" }}
            >
              200+
            </h1>
            <h1 style={{ color: "white" }}>معلم</h1>
          </div>
          <div>
            <p>
              ساعدنا الكثير من المعلمين لمتابعة أمور فصولهم و حاولنا جعل عملية
              التعليم أبسط و أسهل على المعلم
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="right">
      <h1>معاً لتعليم أفضل</h1>
      <p>نهدف إلى بناء عملية تعليمية بجودة عالية</p>
    </div>
  </div>
);

export default StatisticLanding;
