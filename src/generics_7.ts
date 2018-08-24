enum FileAccess {
    // 常量
    None,
    Read= 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // 计算出来的
    G = "123".length,
}