import React from 'react';
import ReactDOM from 'react-dom';
import Timetable from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Timetable lessons={[
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 700,
          end: 830
        },
        className: 'orange',
      },
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 800,
          end: 900
        },
        className: 'red grayscale',
      },
      {
        title: 'Long one',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 845,
          end: 930
        },
        className: 'orange grayscale',
      },
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 950,
          end: 1035
        },
        className: 'red',
      },
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 950,
          end: 1035
        },
        className: 'yellow grayscale',
      },
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 950,
          end: 1035
        },
        className: 'green',
      },
      {
        title: 'Subject XYZ',
        shortcut: 'XYZ',
        teacher: 'Jan Kašpárek',
        room: 'A42',
        time: {
          begin: 1100,
          end: 1145
        },
        className: 'yellow',
      },
    ]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
