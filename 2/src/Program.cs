using Day2;
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Starting!");

string[] inputLines = System.IO.File.ReadAllLines(@".\input-1.txt");

var instructions = inputLines.Select(line => {
    var split = line.Split(' ');
    return (split[0], Convert.ToInt32(split[1]));
}).ToList();

var result1 = Functions.Algorithm1((0,0), instructions);
var result2 = Functions.Algorithm2((0,0), instructions);

Console.WriteLine("Part 1");
Console.WriteLine(result1);
Console.WriteLine(result1.depth * result1.horizontal);

Console.WriteLine("Part2");
Console.WriteLine(result2);
Console.WriteLine(result2.depth * result2.horizontal);

Console.WriteLine("Done!");
