// const dateInHtml = document.querySelector('.textDate');
// const valueDate = new Date();
// const selectDay = valueDate.getDay();
// const selectNumberOfDay = valueDate.getDate();
// const selectMonth = valueDate.getMonth();
// const selectYear = valueDate.getFullYear();
// const selectHours = valueDate.getHours();
// const selectMinutes = valueDate.getMinutes();
// const translateDayText = translateDay(selectDay);
// const translateMonthText = translateMonth(selectMonth);

// dateInHtml.innerHTML = `${translateDayText}, ${selectNumberOfDay} de ${translateMonthText}  de ${selectYear} ${selectHours}:${selectMinutes}`;

// function translateDay(selectDay) {
//   let translateDayText;

//   switch(selectDay) {
//     case 0:
//       translateDayText = 'Domingo';
//       return translateDayText;
//     case 1:
//       translateDayText = 'Segunda-feira';
//       return translateDayText;
//     case 2:
//       translateDayText = 'Terça-feira';
//       return translateDayText;
//     case 3:
//       translateDayText = 'Quarta-feira';
//       return translateDayText;
//     case 4:
//       translateDayText = 'Quinta-feira';
//       return translateDayText;
//     case 5:
//       translateDayText = 'Sexta-feira';
//       return translateDayText;
//     case 6:
//       translateDayText = 'Sábado';
//       return translateDayText;
//   }
// }

// function translateMonth(selectMonth) {
//   let translateMonthText;

//   switch(selectMonth) {
//     case 0:
//       translateMonthText = 'Janeiro';
//       return translateMonthText;
//     case 1:
//       translateMonthText = 'Fevereiro';
//       return translateMonthText;
//     case 2:
//       translateMonthText = 'Março';
//       return translateMonthText;
//     case 3:
//       translateMonthText = 'Abril';
//       return translateMonthText;
//     case 4:
//       translateMonthText = 'Maio';
//       return translateMonthText;
//     case 5:
//       translateMonthText = 'Junho';
//       return translateMonthText;
//     case 6:
//       translateMonthText = 'Julho';
//       return translateMonthText;
//     case 7:
//       translateMonthText = 'Agosto';
//       return translateMonthText;
//     case 8:
//       translateMonthText = 'Setembro';
//       return translateMonthText;
//     case 9:
//       translateMonthText = 'Outubro';
//       return translateMonthText;
//     case 10:
//       translateMonthText = 'Novembro';
//       return translateMonthText;
//     case 11: 
//       translateMonthText = 'Dezembro';
//       return translateMonthText; 
//   }
// }

// const dateInHtml = document.querySelector('.textDate');
// const valueDate = new Date();
// const options = { dataStyle: 'full', timeStyle: 'short' }
// dateInHtml.innerHTML = valueDate.toLocaleDateString('pt-BR', options);
