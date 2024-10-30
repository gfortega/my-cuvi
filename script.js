document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('downloadPDF').addEventListener('click', function() {
    const element = document.querySelector('.cv-container');

    const options = {
      margin: 0,
      filename: 'CV-Guido-Ortega.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  });
});