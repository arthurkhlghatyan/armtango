import React, { Fragment } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Jumbotron from '../components/jumbotron';
import calendarData from '../data/calendar';

const renderLocation = (gMapUrl) => {
  return typeof gMapUrl === 'undefined' ?
    null :
    (
      <a style={{ display: 'block' }} target="_blank" href={gMapUrl}>
        Open place on Google Map
      </a>
    );
};

const renderCalendar = (calendar) => {
  const renderDinner = (dinner) => {
    const {
      starts,
      ends,
      title,
      included,
      gMapUrl,
    } = dinner;

    return (
      <Fragment>
        <td className="agenda-time">
          <div>{starts}</div>
          <div>-</div>
          <div>{ends}</div>
        </td>
        <td className="agenda-events">
          <div className="text-left agenda-event">
            <p>{title}</p>
            <p>Included: {included}</p>
            <p>{renderLocation(gMapUrl)}</p>
          </div>
        </td>
      </Fragment>
    );
  };

  const renderWorkshop = (workshop) => {
    const { starts, ends, title, maestros, gMapUrl } = workshop;
    const maestrosText = maestros.match('and') !== null ? 'Maestros' : 'Maestro';

    return (
      <Fragment>
        <td className="agenda-time">
          <div>{starts}</div>
          <div>-</div>
          <div>{ends}</div>
        </td>
        <td className="agenda-events">
          <div className="text-left agenda-event">
            <p>Workshop: {title}</p>
            <p>{maestrosText}: {maestros}</p>
            <p>{renderLocation(gMapUrl)}</p>
          </div>
        </td>
      </Fragment>
    );
  };

  const renderEvent = (event) => {
    const {
      starts,
      ends,
      title,
      maestros,
      included,
      isImportant,
      eventLink,
      gMapUrl,
    } = event;
    const boldClass = isImportant ? 'font-weight-bold' : '';

    const eventRow = 
      typeof eventLink === 'undefined' ?
      null :
      (
        <a style={{ display: 'block' }} target="_blank" href={eventLink}>
          See Facebook Event
        </a>
      );

    if (typeof maestros !== 'undefined') {
      return renderWorkshop(event);
    }

    if (typeof included !== 'undefined') {
      return renderDinner(event);
    }

    return (
      <Fragment>
        <td className={`agenda-time ${boldClass}`}>
          <div>{starts}</div>
          <div>-</div>
          <div>{ends}</div>
        </td>
        <td className="agenda-events">
          <div className={`text-left agenda-event ${boldClass}`}>
            <p>{title}</p>
            <p>
              {eventRow}
              {renderLocation(gMapUrl)}
            </p>
          </div>
        </td>
      </Fragment>
    );
  };

  const mapEvent = (item, index) => {
    return (
      <tr key={index}>
        {renderEvent(item)}
      </tr>
    );
  };

  const mapDate = (item, index) => {
    const { date, events } = item;
    const length = events.length;
    const firstEvent = events.shift();

    return (
      <Fragment key={index}>
        <tr className="agenda-date-start">
          <td className="agenda-date active" rowSpan={length}>
            <div className="dayofmonth">{date.day}</div>
            <div className="dayofweek">{date.dayofweek}</div>
            <div className="shortdate text-muted">{date.shortdate}</div>
          </td>
          {renderEvent(firstEvent)}
        </tr>
        {events.map(mapEvent)}
      </Fragment>
    );
  };

  return calendar.map(mapDate);
};

const Schedule = () => (
  <Layout>
    <SEO
      title="Calendar"
      keywords={[`tango`, `#ArmTangoFest2019`, `calendar`]}
    />
    <Jumbotron title="Calendar" description="See detailed event schedule">
      <div className="agenda">
        <table className="table">
          <tbody>
            <tr>
              <th className="agenda-date-header">Date</th>
              <th className="text-left">Time</th>
              <th className="text-left">Event</th>
            </tr>
            {renderCalendar(calendarData)}
          </tbody>
        </table>
      </div>
    </Jumbotron>
  </Layout>
);

export default Schedule;
