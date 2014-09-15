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
});
