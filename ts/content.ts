import * as http from "http";
import * as url from "url"; // űrlapokhoz, input kiolvasás
import * as fs from "fs"; // file-kezelés

System:

namespace Erettsegi28_Expedíció
{
    interface Vétel
    {
        N: number; //Nap sorszáma
        R: number; //Rádióamatőr száma
        Ü: string; //Rögzített üzenet

        new(m: string[], ü: string): Vétel;

        export static Vétel operator + (Vétel v1, Vétel v2) 
        {
            s: string;
            for (i; number; i++)
            {ch: char;
                if (v1.Ü[i] != '#') ch = v1.Ü[i];
                else if (v2.Ü[i] != '#') ch = v2.Ü[i];
                s += ch;
            }
            return new Vétel(new string[] { "0", "0" }, s);
        }

        export string MegfigyeltEgyedek 
        {
            get
            {m: string[];
                if (m.Length != 2) return "Nincs információ";
                try { return  string.Format("A megfigyelt egyedek száma: {0}", int.Parse(m[0]) + int.Parse(m[1]) );  }
                catch (Exception) { return "Nincs információ"; }
            }
        }
    }


    export class Content 
    {

        Content(req: http.ServerRequest, res: http.ServerResponse): void 
        {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.write("<p>Hello TypeScript!</p>");

            var szame(szo: string): boolean;

                var v: Vétel[];
                    using (sr: StreamReader; res.write( " <p>2. feladat:\nAz első üzenet rögzítője: {0}\nAz utolsó üzenet rögzítője: {1}</p>", v[0].R, v.Last().R);

                    res.write("<p>3. feladat:</p>");
                    res.write(v.Where(x => x.Ü.Contains("farkas")).Aggregate("", (c, n) => c += String.Format("\n{0}. nap: {1}. rádióamatőr", n.N, n.R)));
        
                    res.write("<p>4. feladat:</p>");
                    Array.ForEach(Enumerable.Range(1, 11).ToArray(), i => res.write("<p>{0}. nap: {1} rádióamatőr</p>", i, v.Count(x => x.N == i)));
                    ki: string[];
                    Array.ForEach(Enumerable.Range(1, 11).ToArray(), i => { if (v.Where(x => x.N == i).Count() > 0) ki.Add(v.Where(x => x.N == i).Aggregate((c, n) => c += n).Ü); });
                    File.WriteAllLines("adaas.txt", ki);
        
                    res.write("<p>7. feladat:</p>");
                    res.write("<p>Adja meg a nap sorszámát! </p>");sszN: number;
                    res.write("<p>Adja meg a rádióamatőr sorszámát! </p>");sszR: number;f: var;
                    res.write(f.Count()==0?"<p>Nincs ilyen feljegyzé</p>":f.First().MegfigyeltEgyedek);
                    res.end();
        }

                
       
    }

}
