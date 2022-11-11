/* eslint-disable no-unused-vars */
import { Tabs, Timeline } from "antd";
import { FC, useState } from "react";
import "./style.css";

const TimeLineSection: FC = () => {
  const student = [
    "من خلال منصتنا، يمكنك إنشاء حساب بوصف تلميذ.",
    "بعد ذلك، سيقوم المدرس بإضافتك إلى الفصول الدراسية  و و ربطك مع ولي أمرك بعد إعطاءه إيميلك الإلكتروني.",
    "بعد التواصل مع المدرس، يمكنك تسجيل الدخول إلى حسابك لتجد أنه تم إضافتك إلى ولي أمرك و إضافة فصولك الدراسية.",
    "من خلال حسابك يمكنك الوصول لفصولك الدراسية لمعرفة ما ستستفيده من فصولك تابع البند التالي",
  ];

  const studentStep = [
    "رؤية مهامك الدراسية.",
    "رؤية قسم الأسئلة..",
    "رؤية درجاتك.",
    "رؤية جدول الاختبارات.",
    "تقديم تغذية راجعة للمعلم.",
    "رؤية الوسائط التي ينصح بها.",
  ];

  const teacher = [
    "من خلال منصتنا، يمكنك إنشاء حساب بوصف معلّم.",
    "يمكنك إنشاء فصول دراسية جديدة و إذافة الطلاب لهذه الفصول.",
    "من خلال الفصول الدراسية يمكنك إضافة معلومات الطلاب التعليمية و الملاحظات المهمة عنهم.",
    "من خلال الفصول الدراسية، تستطيع أن تكون على تواصل مع أولياء الأمور لتخفيف العبء الواقعي على كلا الطرفين.",
  ];

  const teacherStep = [
    "إنشاء مهمة دراية جديدة.",
    "الإجابة على الأسئلة الموجودة.",
    "إضافة درجات الطلاب.",
    "إذافة موعد إختبار جديد.",
    "إذافة تكليف جديد.",
    "الإطلاع على أحصائيات التكليفات.",
    "الإطلاع على التغذية الراجعة.",
    "إضافة روابط وسائط إضافية.",
  ];

  const parent = [
    "من خلال منصتنا، يمكنك إنشاء حساب بوصف ولي أمر.",
    "بعد ذلك، سيقوم المدرس بإضافة أبنائك إلى حسابك بعد إعطاءه رقم هاتفك.",
    "بعد التواصل مع المدرس، يمكنك تسجيل الدخول إلى حسابك لتجد أبنائك تمت إضافتهم إلى حسابك.",
    "من خلال حسابك، يمكنك الوصول إلى صفحات أبنائك الشخصية، و أيضاً مدرسي أبنائك.",
  ];

  const parentStep = [
    "تعديل معلوماتك.",
    "رؤية حالة أبنائك الصحية.",
    "رؤية درجات أبنائك.",
    "رؤية التقارير و الملاحظات.",
    "رؤية بيانات التواصل مع المعلم.",
    "رؤية نشاطات و مهام الأبناء.",
  ];
  const [role, setRole] = useState<string>("طالب");
  const [data, setData] = useState(student);
  const [dataStep, setDataStep] = useState(studentStep);

  const handleData = (e: any) => {
    if (e.target.name === "student") {
      setData(student);
      setDataStep(studentStep);
      setRole("طالب");
    } else if (e.target.name === "teacher") {
      setData(teacher);
      setDataStep(teacherStep);
      setRole("مدرس");
    } else if (e.target.name === "parent") {
      setData(parent);
      setDataStep(parentStep);
      setRole("ولي أمر");
    }
  };

  return (
    <section id="timeline-section">
      <div className="timeline-text">
        <h1>{role}</h1>
        {data.map((e: any) => (
          <Timeline.Item className="list-items-l">{e}</Timeline.Item>
        ))}
        <Timeline.Item className="list-items">
          في صفحة الفصل الدراسي، يمكنك القيام بالتالي:
          <ul className="step-list">
            {dataStep.map((e: string) => (
              <li>{e}</li>
            ))}
          </ul>
        </Timeline.Item>
      </div>
      <div className="timeline-buttons">
        <div className="buttons">
          <div>
            <button type="button" name="student" onClick={handleData}>
              طالب
            </button>
          </div>
          <div>
            <button type="button" name="teacher" onClick={handleData}>
              مدرس
            </button>
          </div>
          <div>
            <button type="button" name="parent" onClick={handleData}>
              ولي أمر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineSection;

/* <Tabs
defaultActiveKey="1"
items={[
  {
    label: `ولي أمر`,
    key: "1",
    children: [
      parent.map((e: any) => <Timeline.Item>{e}</Timeline.Item>),
      <Timeline.Item>
        في صفحة الفصل الدراسي، يمكنك القيام بالتالي:
        <ul className="step-list">
          {parentStep.map((e: string) => (
            <li>{e}</li>
          ))}
        </ul>
      </Timeline.Item>,
    ],
  },
  {
    label: `مدرس`,
    key: "2",
    children: [
      teacher.map((e: any) => <Timeline.Item>{e}</Timeline.Item>),
      <Timeline.Item>
        في صفحة الفصل الدراسي، يمكنك القيام بالتالي:
        <ul className="step-list">
          {teacherStep.map((e: string) => (
            <li>{e}</li>
          ))}
        </ul>
      </Timeline.Item>,
    ],
  },
  {
    label: `طالب`,
    key: "3",
    children: [
      student.map((e: any) => <Timeline.Item>{e}</Timeline.Item>),
      <Timeline.Item>
        في صفحة الفصل الدراسي، يمكنك القيام بالتالي:
        <ul className="step-list">
          {studentStep.map((e: string) => (
            <li>{e}</li>
          ))}
        </ul>
      </Timeline.Item>,
    ],
  },
]}
/> */
