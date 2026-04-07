FROM mcr.microsoft.com/devcontainers/dotnet:1-9.0-bookworm

# Remove the stale Yarn APT source whose GPG key is no longer valid.
# Without this, every devcontainer feature that runs apt-get update will
# fail with "NO_PUBKEY 62D54FD4003F6525" and exit code 100.
RUN rm -f /etc/apt/sources.list.d/yarn.list
