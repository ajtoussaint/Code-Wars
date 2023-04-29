namespace Solution
{
  public static class Program
  {
    public static double basicOp(char operation, double value1, double value2)
    {
      switch(operation){
          case '+': return value1 + value2;
          break;
          case '-': return value1 - value2;
          break;
          case '*': return value1 * value2;
          break;
          case '/': return value1 / value2;
          break;
          default: return 0;
        }
    }
  }
}