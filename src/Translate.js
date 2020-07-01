import React from "react";

const Translate = () => {
  const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=",
    keyAPI =
      "trnsl.1.1.20130922T110455Z.4a9208e68c61a760.f819c1db302ba637c2bea1befa4db9f784e9fbb8";
  const text =
    "On certain dates in February, an elusive firefall can be spotted at sunset in Yosemite National Park, when the weather cooperates and the direction to the setting Sun is just right. Often photographed from vantage points below, at the right moment the park's seasonal Horsetail Fall is isolated in the shadows of the steep walls of El Capitan. Then, still illuminated with rays of sunlight reflected by the angled rockface directly behind the flow, the waterfall briefly takes on a dramatic, fiery appearance. The Horsetail firefall is more rarely photographed at moonset under a starry night sky, though. Even more elusive by moonlight, the firefall effect can also be seen when skies are clear and a bright Moon sets at the right direction along the western horizon. Skies were clear and stars were shining for this well-planned photograph of the Horsetail firefall lit by a gibbous Moon setting in the early morning hours of May 9";
  let request = `${url}${keyAPI}&text=${text}&lang=en-ru`;

  const fetchText = () => {
    fetch(request)
      .then((res) => res.json())
      .catch((e) => console.error(e));
  };

  return fetchText;
};
export default Translate;
