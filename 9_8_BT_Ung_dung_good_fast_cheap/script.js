// $(document).ready(function() {
//     var good = false,
//       cheap = false,
//       fast = false;
//     $("#good").on("click", function() {

//       if (!$("#good").is(":checked")) {
//         good = false;
//       } else {
//         good = true;
//         if (fast && cheap) {
//           fast = false;
//           $("#fast").prop('checked', false);
//         }
//       }
//     });

//     $("#cheap").on("click", function() {
//       if (!$("#cheap").is(":checked")) {
//         cheap = false;
//       } else {
//         cheap = true;
//         if (fast && good) {
//           good = false;
//           $("#good").prop('checked', false);
//         }
//       }
//     });

//     $("#fast").on("click", function() {
//       if (!$("#fast").is(":checked")) {
//         fast = false;
//       } else {
//         fast = true;
//         if (cheap && good) {
//           cheap = false;
//           $("#cheap").prop('checked', false);
//         }
//       }
//     });

//   });

function goodClick() {
  let statusGood = document.getElementById("good").checked;
  let statusCheap = document.getElementById("cheap").checked;
  let statusFast = document.getElementById("fast").checked;
  if (statusCheap == true && statusFast == true) {
    document.getElementById("cheap").checked = false;
  }
}

function cheapClick() {
  let statusGood = document.getElementById("good").checked;
  let statusCheap = document.getElementById("cheap").checked;
  let statusFast = document.getElementById("fast").checked;
  if (statusGood == true && statusFast == true) {
    document.getElementById("fast").checked = false;
  }
}

function fastClick() {
  let statusGood = document.getElementById("good").checked;
  let statusCheap = document.getElementById("cheap").checked;
  let statusFast = document.getElementById("fast").checked;
  if (statusGood == true && statusCheap == true) {
    document.getElementById("good").checked = false;
  }
}


