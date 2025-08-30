static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        var dept = department?.ToUpper() ?? "OWNER";
        return id.HasValue ? $"[{id}] - {name} - {dept}" : $"{name} - {dept}";
    }
}
