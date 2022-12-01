# box-challenge


100 prisoners numbered 1-100, 100 boxes with numbers inside matching prisoners', randomly shuffled. Each prisoner can open up to 50 boxes in search of their number. 
If all the prisoners find their number, they all are set free, if even 1 doesn't succeed they all remain imprisoned. 
By following a 'loop', opening the box matching their number then going for the box of the same number they found inside the first one 
(5th prisoner opens box number 5 first, inside he finds number 17, they then open box number 17 and so on), 
the chances of them all finding their numbers becomes around 30%, compared to almost impossible if they were to open boxes randomly.
This is a JavaScript reproduction of that.
