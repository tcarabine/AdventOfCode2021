namespace Day2 {
    public static class Functions {
        public static (int depth, int horizontal) Algorithm1((int depth, int horizontal) start, List<(string Direction, int Value)> instructions) {
            var result = instructions.Aggregate(start,((int depth, int horizontal) position, (string Direction, int Value) instruction) => {
                switch(instruction.Direction) {
                    case "up" : return (position.depth - instruction.Value, position.horizontal);
                    case "down" : return (position.depth + instruction.Value, position.horizontal);
                    case "forward": return (position.depth, position.horizontal + instruction.Value);
                    case "backward": return (position.depth, position.horizontal - instruction.Value);
                    default: return position;
                }
            });

            return result;
        }

        public static (int depth, int horizontal) Algorithm2((int depth, int horizontal) start, List<(string Direction, int Value)> instructions) {
            (int aim, (int depth, int horizontal) position) initial = (0, start);

            var result = instructions.Aggregate(initial,((int aim, (int depth, int horizontal) position) current, (string Direction, int Value) instruction) => {
                switch(instruction.Direction) {
                    case "up" : return (current.aim - instruction.Value, current.position);
                    case "down" : return (current.aim + instruction.Value, current.position);
                    case "forward": return (current.aim, ((current.position.depth + current.aim * instruction.Value), (current.position.horizontal + instruction.Value) ));
                    case "backward": return (current.aim, ((current.position.depth - current.aim * instruction.Value), (current.position.horizontal - instruction.Value) ));
                    default: return current;
                }
            });

            return result.position;
        }
    }
}