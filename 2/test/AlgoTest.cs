using Xunit;
using Day2;
using System.Collections.Generic;

namespace Day2.Test
{
    public class Algorithm1Test
    {
        [Fact]
        public void GivenItStartsAt00_WhenCalledWithExampleCommands_ItProduces1510()
        {
            // Arrange
            var input = new List<(string Direction, int Value)>{
                ("forward", 5),
                ("down", 5),
                ("forward", 8),
                ("up", 3),
                ("down", 8),
                ("forward", 2)
            };

            // Act
            var result = Functions.Algorithm1((0, 0), input);
            // Assert

            Assert.Equal(15, result.horizontal);
            Assert.Equal(10, result.depth);

        }
    }

    public class Algorithm2Test
    {
        [Fact]
        public void GivenItStartsAt00_WhenCalledWithExampleCommands_ItProduces1560()
        {
            // Arrange
            var input = new List<(string Direction, int Value)>{
                ("forward", 5),
                ("down", 5),
                ("forward", 8),
                ("up", 3),
                ("down", 8),
                ("forward", 2)
            };

            // Act
            var result = Functions.Algorithm2((0, 0), input);
            // Assert

            Assert.Equal(15, result.horizontal);
            Assert.Equal(60, result.depth);

        }
    }
}