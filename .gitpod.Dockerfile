FROM gitpod/workspace-full

# Install Node.js version 10
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs
