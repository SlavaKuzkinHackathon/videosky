import React, { useState } from 'react';
import PropTypes from 'prop-types';
function MainWindow({ startCall, clientId}) {

  const [friendID, setFriendID] = useState(null)

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container">
      <div className="main-window">
        <div>
          <h3>
            Ваш ID
          <input
              type="text"
              className="txt-clientId"
              defaultValue={clientId}
              readOnly
            />
          </h3>
          <h4> Внимание! Разговоры записываются</h4>
        </div>
        <div>
          <input
            type="text"
            className="txt-clientId" 
            spellCheck={false}
            placeholder="ID магазина"
            onChange={(event) => setFriendID(event.target.value)} 
          />
          <div>
            <button
              type="button"
              className="btn-action fa fa-video-camera"
              onClick={callWithVideo(true)}
            />
            <button
              type="button"
              className="btn-action fa fa-phone"
              onClick={callWithVideo(false)}
            />
          </div>
        </div>
      </div>
      </div>
  );
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;


/* export default function App() {
  const [currentTable, setCurrentTable] = useState("srtoprWrordHePll77io");
  return (
    <div className="App">
      <button type="button" class="btn btn-danger btn-sm"
        onClick={() => {
          setCurrentTable(val =>
            val === "srtoprWrordHePll77io"
              ? "VW6PROWbuPUK6MkW7kdc"
              : "GHdsso84kddKUKL94kdk"
          );
        }}
      ></button> */



      