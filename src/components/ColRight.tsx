import { workExperience } from "../constants/data";
import { ThemeStyle } from "../interfaces/curriculum.interface";

export const ColRight = ({ styles, extraClass }: { styles: ThemeStyle, extraClass: string }) => {
  return (
    <div className={`md:col-span-2 ${extraClass}`}>
      <h3
        className={`text-lg font-bold mb-4 ${styles.accent} uppercase tracking-wider`}
      >
        Experiencia Laboral
      </h3>

      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={index} className={`p-4 rounded-lg ${styles.border} border`}>
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
  );
};
