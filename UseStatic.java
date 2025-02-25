class StaticDemo {
    static int a = 3;
    static int b;

    static void meth(int x) {
        System.out.println("x = " + x);
        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }

    static {
        System.out.println("Static Block Initialized");
        b = a * 4;
    }
}

public class UseStatic {
    static {
        System.out.println("In UseStatic static block");
    }

    public static void main(String args[]) {
        System.out.println("In Main Method");
        StaticDemo.meth(42);
    }
}
