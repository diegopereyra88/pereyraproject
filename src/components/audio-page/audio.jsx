import React from "react";
const name = "diego";
const element = <h1> Soy , {name}</h1>;
export default function Audio() {
  return (
    <div>
      {element}
      <figure>
        <figcaption>Recuerda subir audio</figcaption>
        <audio
          controls
          src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
      <figure>
        <figcaption>Recuerda subir audio</figcaption>
        <audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
}
