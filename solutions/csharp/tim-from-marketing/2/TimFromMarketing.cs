static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        string dept = department?.ToUpper() ?? "OWNER";
        return $"{(id.HasValue ? $"[{id}] - " : "")}{name} - {dept}";
    }
}
