import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePdf = async () => {
  const element = document.getElementById("resume-card");
  
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    
    const imgWidth = 210;
    const pageHeight = 295; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Anderson_Lopez_CV.pdf");
  } catch (error) {
    console.error("Error al generar PDF:", error);
  }
};