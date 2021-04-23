# zts

Aplikacja korzysta z Youtube Data Api v3.
Aplikacja zwraca 5 wyników wyszkuwania z youtube i informuje czy właściciel kanału aktualnie streamuje.
Dobowy limit wyszukiwań to 100.
W zamyśle projekt miał korzystać z innej sekcji api, ale nie byłem w stanie ustawic 2OAUTH od googla - z jakiegoś powodu google wymaga tego, przy zapytaniu na /livestreams,
 a w zapytaniu na /channel (które też jest tańsze) api nie zwracało informacji o streamowaniu (youtube jest pokracznie napisany).

Aplikacja korzysta z asynca, aby usunąć błędy spowodowane zamulaniem serwerów youtuba.

Do działania potrzebdy jest react oraz axios.

Wartość KEY należy zastąpić własnym aktywowanym kluczem od youtube api.




Marcin Gzik Inis3





