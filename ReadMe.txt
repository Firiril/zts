Aplikacja korzysta z Youtube Data Api v3.
Aplikacja zwraca 5 wyników wyszkuwania z youtube i informuje czy właściciel kanału aktualnie streamuje.
Dobowy limit wyszukiwań to 100.
W zamyśle projekt miał korzystać z innej sekcji api, ale nie byłem w stanie ustawic 2OATH od googla - z jakiegoś powodu google wymaga tego, przy zapytaniu na /livestreams,
 a w zapytaniu na /channel (które też jest tańsze) api nie zwracało informacji o streamowaniu.


Aplikacja korzysta z asynca, aby usunąć błędy spowodowane zamulaniem serwerów youtuba.
 