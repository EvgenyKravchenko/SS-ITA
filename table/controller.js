function Controller () {
  var self = this;
  var rows = 0,
      cols = 0;

  this.init = function() {
    $("#add_row").bind("click", this.addRow);
    $("#add_col").bind("click", this.addCol);
    $("#add_col").attr("disabled", "true");
  };

  this.addRow = function() {
    var target_row = (rows / 2).toFixed() - 1;
    rows++;
    if (rows === 1) {
      addFirstRow(target_row);
    } else {
      addAnyRow(target_row);
    }

  };

  this.addCol = function() {
    var target_col;

    cols++;
    target_col = (cols / 2).toFixed() - 1;
    $("#table tr").find("td:eq(" + target_col + ")").each(function() {
      $(this).after("<td>col</td>");
    });
  };

  function addFirstRow (target_row) {
    $("#table > tbody").append("<tr>");
    $("#table > tbody > tr:first").append("<td>" + target_row + "</td>");
    $("#table > tbody > tr:first").append(
      "<td id='row0'><img src='img/delete.png'></td>"
    );
    $("#add_col").removeAttr("disabled");
    bindDeleteRow("row0");
  }

  function addAnyRow (target_row) {
    $("#table > tbody > tr:eq(" + target_row + ")").after("<tr>");

    for (var j = 0; j <= cols; j++) {
      $("#table > tbody > tr:eq(" + (target_row + 1) + ")").append("<td>ROW</td>");
    }

    $("#table > tbody > tr:eq(" + (target_row + 1) + ")").append(
      "<td id='row"+ (target_row + 1) +"'><img src='img/delete.png'></td>"
    );

    bindDeleteRow("row" + (target_row + 1));
  }


  function bindDeleteRow(id) {
    $("#" + id).bind("click", function() {
      $(this).parent("tr").remove();
      rows--;
      if (rows === 0) {
        cols = 0;
        $("#add_col").attr("disabled", "true");
      }
    });
  }

  return this;
}