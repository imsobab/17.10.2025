public class TravelingSalesman {
    static int N = 4;
    static int[][] dist = {
        {0, 10, 15, 20},
        {10, 0, 35, 25},
        {15, 35, 0, 30},
        {20, 25, 30, 0}
    };
    static int[][] memo;

    public static int tsp(int mask, int pos) {
        if (mask == (1 << N) - 1) {
            return dist[pos][0];
        }
        if (memo[mask][pos] != -1) {
            return memo[mask][pos];
        }
        int ans = Integer.MAX_VALUE;
        for (int city = 0; city < N; city++) {
            if ((mask & (1 << city)) == 0) {
                int newAns = dist[pos][city] + tsp(mask | (1 << city), city);
                ans = Math.min(ans, newAns);
            }
        }
        return memo[mask][pos] = ans;
    }

    public static void main(String[] args) {
        memo = new int[1 << N][N];
        for (int i = 0; i < (1 << N); i++) {
            for (int j = 0; j < N; j++) {
                memo[i][j] = -1;
            }
        }
        System.out.println("Минимальный маршрут: " + tsp(1, 0));
    }
}
