$(document).ready(function () {
    $('#collectionTableMusic').DataTable({
        "columnDefs": [
          {
              "orderable": false,
              "targets": 7
          }
        ]
    });

    $('#collectionTableMovies').DataTable({
        "columnDefs": [
          {
              "orderable": false,
              "targets": 8
          }
        ]
    });

    $('#collectionTableGames').DataTable({
        "columnDefs": [
          {
              "orderable": false,
              "targets": 7
          }
        ]
    });

    $('#requestTable').DataTable({
        "columnDefs": [
            {
                "orderable": false,
                "targets": 3
            }
        ]
    });

    $('.btnCollectionTableEdit').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnCollectionTableLoan').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnCollectionTableReturn').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnCollectionTableRemove').click(function (e) {
        var itemID = e.target.id.substring(e.target.id.indexOf('_') + 1);
        var result;
        
        if (e.target.id.indexOf("Music") >= 0)
        {
            var artist = $.trim($('#collectionTableMusic tr:eq(' + itemID + ') > td:eq(0)').text());
            var album = $.trim($('#collectionTableMusic tr:eq(' + itemID + ') > td:eq(1)').text());

            result = confirm('Are you sure you want to remove "' + artist + ' - ' + album + '"?');
            if (result)
            {
                $('#collectionTableMusic').DataTable().row($('#collectionTableMusic tr:eq(' + itemID + ')')).remove().draw();

                alert("Removed!");
            }
        }
        else if (e.target.id.indexOf("Movie") >= 0)
        {
            var movieTitle = $.trim($('#collectionTableMovie tr:eq(' + itemID + ') > td:eq(0)').text());

            result = confirm('Are you sure you want to remove "' + movieTitle + '"?');
            if (result) {
                $('#collectionTableMovie').DataTable().row($('#collectionTableMovie tr:eq(' + itemID + ')')).remove().draw();

                alert("Removed!");
            }
        }
        else if (e.target.id.indexOf("Game") >= 0)
        {
            var gameTitle = $.trim($('#collectionTableGame tr:eq(' + itemID + ') > td:eq(0)').text());

            result = confirm('Are you sure you want to remove "' + gameTitle + '"?');
            if (result) {
                $('#collectionTableGame').DataTable().row($('#collectionTableGame tr:eq(' + itemID + ')')).remove().draw();

                alert("Removed!");
            }
        }
    });

    $('.btnCollectionTableRequest').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnRequestTableApprove').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnRequestTableDeny').click(function (e) {
        console.log(e.target.id);
    });
});
