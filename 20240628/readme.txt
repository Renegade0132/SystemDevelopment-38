Ide toltam fel azt a szerver projektet, amelyet fejlesztettünk. Amit tudni kell: a fájlokat letöltöd, majd a .sln fájlt megnyitod visual studioval, és ott nézheted a CSharp kódot. A buildelés után tudod is futtatni ('http'-ként), és a felbukkanó terminálablakban lesd ki a portszámot! Ezt a portszámot fogod beírni a kliens kódjába, hogy el tudja érni.

BANDI: a kliensedet igazíts ehhez: JSON üzenetet küld, majd JSON választ kap. A kliens üzenete így néz ki:
{
    token:""
    command: #ide jön a parancs
    data:{
              #Ide jön a commandhoz tartozó adatok. Pl. ha a parancs "login", akkor a data a username:"username" és a password:"jelszo" lesz
          }
}
