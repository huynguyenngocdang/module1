// let id = "A";
// let status = true;
// let pin = 100;
// let tinNhanDaGui = [
//   ["B", "Message 1"],
//   ["B", "Message 2"],
// ];
// let tinNhanDaNhan = [
//   ["B", "Message X"],
//   ["B", "Message Y"],
// ];
// let tinNhanTam = [];
// let tinNhanDangSoan = "";
// let doiTuongGui = ["B", "C"];

class Phone {
  constructor(
    id,
    status,
    pin,
    tinNhanDaGui,
    tinNhanDaNhan,
    tinNhanTam,
    tinNhanDangSoan,
    doiTuongGui
  ) {
    this.id = id;
    this.status = status;
    this.pin = pin;
    this.getStatus = function (status) {
        if (status) {
            return "ON";
        } else {
            return "OFF";
        }
    }
    this.tinNhanDaGui = tinNhanDaGui;
    this.tinNhanDaNhan = tinNhanDaNhan;
    this.tinNhanTam = tinNhanTam;
    this.tinNhanDangSoan = tinNhanDangSoan;
    this.doiTuongGui = doiTuongGui;
    this.pinDisplay = function (pin) {
        let pinDisplay = "";
        for (let i = 0; i < pin; i+=10) {
            pinDisplay += "|"
            
        }
        return pinDisplay;
    }
    
    this.getTinNhanDaGui = function () {
        let str = "";
        for (let i = 0; i < tinNhanDaGui.length; i++) {
            str += i + ": "
            for (let j in tinNhanDaGui[i]) {
               str += tinNhanDaGui[i][j] 
            }
            str += "<br/>"
        }
        return str;
    }

    this.getTinNhanDaNhan = function () {
        let str = "";
        for (let i = 0; i < tinNhanDaNhan.length; i++) {
            str += i + ": "
            for (let j in tinNhanDaNhan[i]) {
               str += tinNhanDaNhan[i][j] 
            }
            str += "<br/>"
        }
        return str;
    }
        

  }
}

let phoneA = new Phone(
    "A",
    true,
    40,
    [
      ["B", " Message 1"],
      ["B", " Message 2"],
    ],
    [
      ["B", " Message X"],
      ["B", " Message Y"],
    ],
    [],
    "",
    ["B", "C"]
  );

  let phoneB = new Phone(
    "B",
    true,
    80,
    [
      ["A", " Message X"],
      ["A", " Message Y"],
    ],
    [
      ["A", " Message 1"],
      ["A", " Message 2"],
    ],
    [],
    "",
    ["A", "C"]
  );

  document.getElementById("phoneAPin").innerHTML = phoneA.pin;
  document.getElementById("phoneAPinCount").value = phoneA.pinDisplay(phoneA.pin);
  document.getElementById("phoneATinNhanDaGui").innerHTML = phoneA.getTinNhanDaGui();
  document.getElementById("phoneATinNhanDaNhan").innerHTML = phoneA.getTinNhanDaNhan();
  document.getElementById("statusADisplay").innerHTML = phoneA.getStatus(phoneA.status);
  document.getElementById("statusA").checked = phoneA.status;
  statusCheck("A");

  document.getElementById("phoneBPin").innerHTML = phoneB.pin;
  document.getElementById("phoneBPinCount").value = phoneB.pinDisplay(phoneB.pin);
  document.getElementById("phoneBTinNhanDaGui").innerHTML = phoneB.getTinNhanDaGui();
  document.getElementById("phoneBTinNhanDaNhan").innerHTML = phoneB.getTinNhanDaNhan();
  document.getElementById("statusBDisplay").innerHTML = phoneB.getStatus(phoneB.status);
  document.getElementById("statusB").checked = phoneB.status;
  statusCheck("B");
function onLoad() {

  document.getElementById("phoneAPin").innerHTML = phoneA.pin;
  document.getElementById("phoneAPinCount").value = phoneA.pinDisplay(phoneA.pin);
}

function recharge(id) {

    switch (id) {
        case "A":
            if (phoneA.pin < 100) {
                phoneA.pin += 10;
                document.getElementById("phoneAPin").innerHTML = phoneA.pin;
                document.getElementById("phoneAPinCount").value = phoneA.pinDisplay(phoneA.pin);
                statusCheck("A");
            } else {
                alert("Phone A Battery Full")
            }

            break;
            case "B":
                if (phoneB.pin < 100) {
                    phoneB.pin += 10;
                    document.getElementById("phoneBPin").innerHTML = phoneB.pin;
                    document.getElementById("phoneBPinCount").value = phoneB.pinDisplay(phoneB.pin);
                    statusCheck("B");
                } else {
                    alert("Phone B Battery Full")
                }
    
                break;
    
        default:
            break;
    }
}


function checkStatus() {
    console.log(phoneA.tinNhanDaNhan)
}

function guiTinNhan(id) {
    let phoneAid = "A";
    let phoneBid = "B";
    let sentTo = "";
    let noiDungGui = "";

    switch (id) {
        case phoneAid:
            if (phoneA.status) {
                sentTo = document.getElementById("phoneASentTo").value;
                noiDungGui = " " + document.getElementById("messageA").value;
                phoneA.tinNhanDaGui.push([sentTo, noiDungGui])
                phoneB.tinNhanDaNhan.push([phoneAid ,noiDungGui]);
                document.getElementById("phoneATinNhanDaGui").innerHTML = phoneA.getTinNhanDaGui();
                document.getElementById("phoneBTinNhanDaNhan").innerHTML = phoneB.getTinNhanDaNhan();
                phoneA.pin -= 10;
                document.getElementById("phoneAPin").innerHTML = phoneA.pin;
                document.getElementById("phoneAPinCount").value = phoneA.pinDisplay(phoneA.pin);
                statusCheck("A");
            } else {
                
            }

            break;

            case phoneBid:

            if (phoneB.status) {
                sentTo = document.getElementById("phoneBSentTo").value;
                noiDungGui = " " + document.getElementById("messageB").value;
                phoneB.tinNhanDaGui.push([sentTo, noiDungGui])
                phoneA.tinNhanDaNhan.push([phoneAid ,noiDungGui]);
                document.getElementById("phoneBTinNhanDaGui").innerHTML = phoneB.getTinNhanDaGui();
                document.getElementById("phoneATinNhanDaNhan").innerHTML = phoneA.getTinNhanDaNhan();
                phoneB.pin -= 10;
                document.getElementById("phoneBPin").innerHTML = phoneB.pin;
                document.getElementById("phoneBPinCount").value = phoneB.pinDisplay(phoneB.pin);
                statusCheck("B");
            } else {
                
            }

            break;
    
        default:
            break;
    }
}

function statusCheck(id) {

    let status = "";
    let pinLevel;
    switch (id) {
        case "A":
            status = document.getElementById("statusA").checked;
            pinLevel = phoneA.pin;

            if (status == true && pinLevel > 0) {
                document.getElementById("statusADisplay").innerHTML = "ON";
                
                document.getElementById("btnMessageA").disabled = false;
            } else {
                document.getElementById("statusADisplay").innerHTML = "OFF";
                document.getElementById("statusA").checked = false;
                document.getElementById("btnMessageA").disabled = true;
            }
            break;

            case "B":
                status = document.getElementById("statusB").checked;
                pinLevel = phoneB.pin;
                if (status == true && pinLevel > 0) {
                    document.getElementById("statusBDisplay").innerHTML = "ON";
                    
                    document.getElementById("btnMessageB").disabled = false;
                } else {
                    document.getElementById("statusBDisplay").innerHTML = "OFF";
                    document.getElementById("statusB").checked = false; 
                    document.getElementById("btnMessageB").disabled = true;
                }
                break;
    
        default:
            break;
    }
}