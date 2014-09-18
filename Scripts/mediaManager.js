$(document).ready(function () {
    $('body').on('click', 'a.disabled', function (e) {
        e.preventDefault();
    });

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

    $('#editMusicModal').on('show.bs.modal', function (e) {
        var itemID = e.relatedTarget.id.substring(e.relatedTarget.id.indexOf('_') + 1);

        $.get("Music/Edit/", { id: itemID })
            .done(function (data) {
                $('#editMusicModalID').val(data.ID);
                $('#editMusicModalArtist').val(data.Artist);
                $('#editMusicModalAlbumTitle').val(data.AlbumTitle);
                $('#editMusicModalYear').val(data.Year);
                $('#editMusicModalGenre').val(data.Genre);
            });
    });

    $('#editMovieModal').on('show.bs.modal', function (e) {
        var itemID = e.relatedTarget.id.substring(e.relatedTarget.id.indexOf('_') + 1);

        $.get("Movie/Edit/", { id: itemID })
            .done(function (data) {
                $('#editMovieModalID').val(data.ID);
                $('#editMovieModalTitle').val(data.Title);
                $('#editMovieModalGenre').val(data.Genre);
                $('#editMovieModalYear').val(data.Year);
                $('#editMovieModalLength').val(data.Length);
                $('#editMovieModalFormat').val(data.Format);
            });
    });

    $('#editGameModal').on('show.bs.modal', function (e) {
        var itemID = e.relatedTarget.id.substring(e.relatedTarget.id.indexOf('_') + 1);

        $.get("Game/Edit/", { id: itemID })
            .done(function (data) {
                $('#editGameModalID').val(data.ID);
                $('#editGameModalTitle').val(data.Title);
                $('#editGameModalPlatform').val(data.Platform);
                $('#editGameModalGenre').val(data.Genre);
                $('#editGameModalYear').val(data.Year);
            });
    });

    $('.btnCollectionTableLoanReturn').click(function (e) {
        var currentRowIndex = $(this).closest('td').parent()[0].sectionRowIndex + 1;
        var itemID = e.target.id.substring(e.target.id.indexOf('_') + 1);
        var loan = false;
        var dt = new Date();

        if (e.target.id.indexOf("Loan") >= 0) {
            loan = true;
        }

        if (e.target.id.indexOf("Music") >= 0) {
            var musicItem = {};
            musicItem.ID = itemID;
            musicItem.OwnerID = 0;
            musicItem.Artist = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex + ') > td:eq(0)').text());
            musicItem.AlbumTitle = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex + ') > td:eq(1)').text());
            musicItem.Year = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex + ') > td:eq(2)').text());
            musicItem.Genre = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex + ') > td:eq(3)').text());

            if (loan) {
                musicItem.OnLoan = "Yes";
                musicItem.LoanedDate = dt.getFullYear()
                    + '-' + pad(dt.getMonth() + 1, 2)
                    + '-' + pad(dt.getDate(), 2)
                    + ' ' + pad(dt.getHours(), 2)
                    + ':' + pad(dt.getMinutes(), 2)
                    + ':' + pad(dt.getSeconds(), 2);
            }
            else {
                musicItem.OnLoan = "No";
                musicItem.LoanedDate = null;
            }

            musicItem.LoanedTo = null;

            $.post("Music/Edit/", addRequestVerificationToken({ music: musicItem }))
                .done(function (data) {
                    //var musicTable = $('#collectionTableMusic').DataTable();
                    //musicTable.cell(currentRowIndex - 1, 4).data(musicItem.OnLoan);
                    //musicTable.cell(currentRowIndex - 1, 5).data(musicItem.LoanedTo);

                    //if (loan) {
                    //    musicTable.cell(currentRowIndex - 1, 6).data("0 days");
                    //}
                    //else {
                    //    musicTable.cell(currentRowIndex - 1, 6).data(null);
                    //}

                    //musicTable.draw();
                    
                    //alert('"' + musicItem.Artist + ' - ' + musicItem.AlbumTitle + '" successfully loaned!');
                    location.reload(true);
                });
        }
        else if (e.target.id.indexOf("Movie") >= 0) {
            var movieItem = {};
            movieItem.ID = itemID;
            movieItem.OwnerID = 0;
            movieItem.Title = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(0)').text());
            movieItem.Genre = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(1)').text());
            movieItem.Year = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(2)').text());
            movieItem.Length = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(3)').text());
            movieItem.Format = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(4)').text());
            movieItem.OnLoan = "Yes";
            movieItem.LoanedTo = null;

            if (loan) {
                movieItem.OnLoan = "Yes";
                movieItem.LoanedDate = dt.getFullYear()
                    + '-' + pad(dt.getMonth() + 1, 2)
                    + '-' + pad(dt.getDate(), 2)
                    + ' ' + pad(dt.getHours(), 2)
                    + ':' + pad(dt.getMinutes(), 2)
                    + ':' + pad(dt.getSeconds(), 2);
            }
            else {
                movieItem.OnLoan = "No";
                movieItem.LoanedDate = null;
            }

            movieItem.LoanedTo = null;

            $.post("Movie/Edit/", addRequestVerificationToken({ movie: movieItem }))
                .done(function (data) {
                    location.reload(true);
                });
        }
        else if (e.target.id.indexOf("Game") >= 0) {
            var gameItem = {};
            gameItem.ID = itemID;
            gameItem.OwnerID = 0;
            gameItem.Title = $.trim($('#collectionTableGame tr:eq(' + currentRowIndex + ') > td:eq(0)').text());
            gameItem.Platform = $.trim($('#collectionTableGame tr:eq(' + currentRowIndex + ') > td:eq(1)').text());
            gameItem.Genre = $.trim($('#collectionTableGame tr:eq(' + currentRowIndex + ') > td:eq(2)').text());
            gameItem.Year = $.trim($('#collectionTableGame tr:eq(' + currentRowIndex + ') > td:eq(3)').text());
            gameItem.OnLoan = "Yes";
            gameItem.LoanedTo = null;

            if (loan) {
                gameItem.OnLoan = "Yes";
                gameItem.LoanedDate = dt.getFullYear()
                    + '-' + pad(dt.getMonth() + 1, 2)
                    + '-' + pad(dt.getDate(), 2)
                    + ' ' + pad(dt.getHours(), 2)
                    + ':' + pad(dt.getMinutes(), 2)
                    + ':' + pad(dt.getSeconds(), 2);
            }
            else {
                gameItem.OnLoan = "No";
                gameItem.LoanedDate = null;
            }

            gameItem.LoanedTo = null;

            $.post("Game/Edit/", addRequestVerificationToken({ game: gameItem }))
                .done(function (data) {
                    location.reload(true);
                });
        }
    });

    $('.btnCollectionTableReturn').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnCollectionTableRemove').click(function (e) {
        var currentRowIndex = $(this).closest('td').parent()[0].sectionRowIndex + 1;
        var itemID = e.target.id.substring(e.target.id.indexOf('_') + 1);
        var result;
        
        if (e.target.id.indexOf("Music") >= 0) {
            var artist = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex + ') > td:eq(0)').text());
            var albumTitle = $.trim($('#collectionTableMusic tr:eq(' + currentRowIndex+ ') > td:eq(1)').text());

            result = confirm('Are you sure you want to remove "' + artist + ' - ' + albumTitle + '"?');
            if (result)
            {
                $.post("Music/Delete/", addRequestVerificationToken({ id: itemID }))
                    .done(function (data) {
                        $('#collectionTableMusic').DataTable().row($('#collectionTableMusic tr:eq(' + currentRowIndex + ')')).remove().draw();

                        alert("Removed!");
                    });
            }
        }
        else if (e.target.id.indexOf("Movie") >= 0) {
            var movieTitle = $.trim($('#collectionTableMovie tr:eq(' + currentRowIndex + ') > td:eq(0)').text());

            result = confirm('Are you sure you want to remove "' + movieTitle + '"?');
            if (result) {
                $.post("Movie/Delete/", addRequestVerificationToken({ id: itemID }))
                    .done(function (data) {
                        $('#collectionTableMovie').DataTable().row($('#collectionTableMovie tr:eq(' + currentRowIndex + ')')).remove().draw();

                        alert("Removed!");
                    });
            }
        }
        else if (e.target.id.indexOf("Game") >= 0) {
            var gameTitle = $.trim($('#collectionTableGame tr:eq(' + currentRowIndex + ') > td:eq(0)').text());

            result = confirm('Are you sure you want to remove "' + gameTitle + '"?');
            if (result) {
                $.post("Game/Delete/", addRequestVerificationToken({ id: itemID }))
                    .done(function (data) {
                        $('#collectionTableGame').DataTable().row($('#collectionTableGame tr:eq(' + currentRowIndex + ')')).remove().draw();

                        alert("Removed!");
                    });
            }
        }
    });

    $('.btnCollectionTableRequest').click(function (e) {
        //var currentRowIndex = $(this).closest('td').parent()[0].sectionRowIndex + 1;
        var itemID = e.target.id.substring(e.target.id.indexOf('_') + 1);

        var requestedItem = {};
        requestedItem.ID = 0;
        requestedItem.ItemID = itemID;
        requestedItem.OwnerID = 0;
        requestedItem.RequestorID = 0;

        if (e.target.id.indexOf("Music") >= 0) {
            requestedItem.ItemType = "Music";
        }
        else if (e.target.id.indexOf("Movie") >= 0) {
            requestedItem.ItemType = "Movie";
        }
        else if (e.target.id.indexOf("Game") >= 0) {
            requestedItem.ItemType = "Game";
        }

        $.post("Collection/Request", addRequestVerificationToken({ requestedItem: requestedItem }))
            .done(function (data) {
                //$(this).addClass("disabled");
                location.reload(true);
            });
    });

    $('.btnRequestTableApprove').click(function (e) {
        console.log(e.target.id);
    });

    $('.btnRequestTableDeny').click(function (e) {
        console.log(e.target.id);
    });
});

function addRequestVerificationToken(data) {
    data.__RequestVerificationToken = $('input[name=__RequestVerificationToken]').val();
    return data;
}

function pad(number, length) {
    var str = '' + number;

    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}
