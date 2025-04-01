"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Separator } from "./components/ui/Separator";
import {
  contactInfo,
  courses,
  education,
  skillLevelColors,
  specializations,
  themes,
  themeStyles,
  workExperience,
} from "./constants/data";

export default function ModernResume() {
  const [theme, setTheme] = useState<"light" | "dark" | "blue">("light");
  const styles = themeStyles[theme];

  return (
    <div className={`min-h-screen ${styles.bg} p-4 md:p-8`}>
      <div className="max-w-4xl mx-auto">
        {/* Selector de tema */}
        <div className="flex justify-end gap-2 mb-4">
          {themes.map((themeOption) => (
            <Button
              key={themeOption.value}
              size="sm"
              onClick={() => setTheme(themeOption.value)}
              className={`rounded-full 
                ${
                  theme === themeOption.value
                    ? styles.button
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {themeOption.name}
            </Button>
          ))}
        </div>

        <Card
          id="resume-card"
          className={`${styles.card} border ${styles.border} rounded-xl overflow-hidden shadow-lg`}
        >
          {/* Encabezado con foto y datos personales */}
          <div
            className={`p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center ${styles.card} ${styles.border} rounded-lg`}
          >
            <div
              className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${styles.accent} flex-shrink-0`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-10"
                style={{
                  background: `linear-gradient(to bottom right, ${styles.accent}, transparent)`,
                }}
              />
              <img
                src="imageProfile.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="text-center md:text-left">
              <h1
                className={`text-3xl md:text-4xl font-bold ${styles.primary}`}
              >
                Anderson López
              </h1>
              <h2
                className={`text-xl md:text-2xl font-semibold mt-1 ${styles.accent}`}
              >
                DESARROLLADOR FRONTEND
              </h2>
              <p className={`mt-3 ${styles.secondary} max-w-2xl`}>
                Profesional proactivo y autodidacta, capaz de afrontar cualquier
                reto con pasión por aprender nuevas tecnologías y optimizar las
                ya conocidas. Destaco por mi compañerismo y habilidad para
                seguir instrucciones con excelencia, apoyando en las tareas
                diarias. Busco desafíos que impulsen mi potencial al siguiente
                nivel.
              </p>
            </div>
          </div>

          <Separator className={styles.separator} />

          {/* Layout de dos columnas */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-6 p-6 md:p-8">
            {/* Columna izquierda */}
            <div className="space-y-8">
              {/* Información de contacto */}
              <div>
                <h3
                  className={`text-lg font-bold mb-3 ${styles.accent} uppercase tracking-wider`}
                >
                  Datos de Contacto
                </h3>
                <ul className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <item.icon className={`w-5 h-5 ${styles.accent}`} />
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.secondary} hover:underline`}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className={styles.secondary}>{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historial académico */}
              <div>
                <h3
                  className={`text-lg font-bold mb-3 ${styles.accent} uppercase tracking-wider`}
                >
                  Historial Académico
                </h3>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4 className={`font-semibold ${styles.primary}`}>
                        {edu.institution}
                      </h4>
                      <p className={styles.secondary}>{edu.degree}</p>
                      <p className={`text-sm ${styles.accent}`}>{edu.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Especializaciones */}
              <div>
                <h3
                  className={`text-lg font-bold mb-3 ${styles.accent} uppercase tracking-wider flex items-center gap-2`}
                >
                  <Code2 className="w-5 h-5" />
                  Especializaciones
                </h3>

                <div className="space-y-3">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className={`rounded-lg overflow-hidden border ${styles.border} shadow-sm`}
                    >
                      <div
                        className={`px-3 py-2 ${styles.accent} bg-opacity-10 font-medium flex items-center gap-2`}
                        style={{
                          backgroundColor:
                            theme === "dark"
                              ? "rgba(251, 146, 60, 0.1)"
                              : theme === "blue"
                              ? "rgba(37, 99, 235, 0.1)"
                              : "rgba(234, 88, 12, 0.1)",
                        }}
                      >
                        <spec.icon className="w-5 h-5" />
                        {spec.name}
                      </div>
                      <div className="p-3">
                        <div className="flex flex-wrap gap-2">
                          {spec.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className={`px-3 py-1 rounded-full text-sm border ${styles.border} flex items-center gap-1.5 ${styles.skillPill} ${styles.primary}`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  skillLevelColors[skill.level][theme]
                                }`}
                              />
                              {skill.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cursos */}
              <div>
                <h3
                  className={`text-lg font-bold mb-3 ${styles.accent} uppercase tracking-wider`}
                >
                  Cursos
                </h3>
                <ul className="space-y-2">
                  {courses.map((course, index) => (
                    <li key={index} className="flex justify-between">
                      <span className={styles.secondary}>{course.name}</span>
                      <span className={`text-sm ${styles.accent}`}>
                        {course.platform}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna derecha - Experiencia laboral */}
            <div className="md:col-span-2">
              <h3
                className={`text-lg font-bold mb-4 ${styles.accent} uppercase tracking-wider`}
              >
                Experiencia Laboral
              </h3>

              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${styles.border} border`}
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className={`text-xl font-bold ${styles.primary}`}>
                          {job.position}
                        </h4>
                        <p className={styles.secondary}>{job.company}</p>
                      </div>
                      <div className={`text-sm ${styles.accent} font-medium`}>
                        {job.period}
                      </div>
                    </div>

                    <ul className="space-y-2 list-disc pl-5">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className={styles.secondary}>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pie de página */}
          {/* <div className={`p-4 flex justify-center ${styles.border} border-t`}>
            <Button className={`${styles.button} cursor-pointer`} >
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </Button>
          </div> */}
        </Card>
      </div>
    </div>
  );
}
