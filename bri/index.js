const axios = require("axios");
var FormData = require("form-data");
const fs = require("fs");

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const getDataBri = async function () {
  try {
    const url =
      "https://bri.co.id/lokasi?p_p_id=location_display_ortlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=%2Flocation%2Fui%2Fsearch&p_p_cacheability=cacheLevelPage";

    let bodyFormData = new FormData();
    let fileName = "bri.json";
    let count = 1;
    for (let i = 1; i <= 20158; i++) {
      bodyFormData = new FormData();
      bodyFormData.append("_location_display_ortlet_page", i.toString());
      bodyFormData.append("_location_display_ortlet_locationType", "");
      bodyFormData.append("_location_display_ortlet_province", "");
      bodyFormData.append("_location_display_ortlet_service", "");

      const { data: response } = await axios.post(url, bodyFormData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie:
            "visid_incap_2611317=fAvU7AEpSueQMkCYF7ceO4dzrWMAAAAAQUIPAAAAAABuXk+PzSh0+SWBLmS2D+3T; _ga=GA1.3.539311252.1672311696; _gid=GA1.3.718004633.1672311696; incap_ses_7253_2611317=cKukdtk/9wgSasleSNWnZECErWMAAAAAATAfUsSRKrX5oBB5I7hh0g==; incap_ses_7261_2611317=jSs4E8fbvCBFzIo2O0HEZDm2rWMAAAAAAfW+DpxepbzQSDzAFiF+8A==; JSESSIONID=A4A86B733F8F5541ADE257E2842B55B8.liferay4; nlbi_2611317=LsLKU54ueQjmsYGvmPL8pQAAAABJtJ66QQX+Y/CTbnK9XhQv; LFR_SESSION_STATE_20105=1672331662139",
        },
      });

      for (let i = 0; i < response.data.length; i++) {
        data = JSON.stringify(response.data[i]) + ",";
        fs.appendFileSync(fileName, data);
      }
      console.log(i);
      if (i % 1000 == 0) {
        count++;
        fileName = fileName + count + ".json";
        await delay(1000);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

getDataBri();
